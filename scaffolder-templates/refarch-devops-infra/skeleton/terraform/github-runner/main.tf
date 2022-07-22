################################################################
## defaults
################################################################
terraform {
  required_version = "~> 1.1.3"

  backend "s3" {}
}

module "tags" {
  source = "git@github.com:sourcefuse/terraform-aws-refarch-tags?ref=1.0.1"

  environment = terraform.workspace
  project     = "refarch-devops-infra"

  extra_tags = {
    Purpose      = "Github Actions Runner"
    MonoRepo     = "True"
    MonoRepoPath = "terraform/github-runner"
  }
}

provider "aws" {
  region  = var.region
  profile = var.profile
}

################################################################
## lookups
################################################################
data "aws_vpc" "this" {
  filter {
    name   = "tag:Name"
    values = ["refarch${var.namespace}-${terraform.workspace}-vpc"]
  }
}

data "aws_subnets" "private" {
  filter {
    name = "tag:Name"
    values = [
      "refarch${var.namespace}-${terraform.workspace}-privatesubnet-private-${var.region}a",
      "refarch${var.namespace}-${terraform.workspace}-privatesubnet-private-${var.region}b"
    ]
  }
}

data "aws_subnets" "public" {
  filter {
    name = "tag:Name"
    values = [
      "refarch${var.namespace}-${terraform.workspace}-publicsubnet-public-${var.region}a",
      "refarch${var.namespace}-${terraform.workspace}-publicsubnet-public-${var.region}b"
    ]
  }
}

data "aws_security_group" "this" {
  tags = {
    Name = "refarch${var.namespace}-${terraform.workspace}"
  }
}

################################################################
## ssh
################################################################
module "ssh_key_pair" {
  source  = "cloudposse/key-pair/aws"
  version = "0.18.2"

  namespace             = var.namespace
  stage                 = terraform.workspace
  name                  = "github-runner"
  ssh_public_key_path   = "${path.root}/secrets"
  generate_ssh_key      = "true"
  private_key_extension = ".pem"
  public_key_extension  = ".pub"
}

################################################################
## ec2
################################################################
module "runner" {
  source  = "cloudposse/ec2-instance/aws"
  version = "0.41.0"

  name         = "github-runner"
  namespace    = var.namespace
  stage        = terraform.workspace
  ssh_key_pair = module.ssh_key_pair.key_name

  vpc_id        = data.aws_vpc.this.id
  instance_type = var.instance_type
  subnet        = data.aws_subnets.private.ids[0]
  ami           = "ami-04505e74c0741db8d"
  ami_owner     = "099720109477"

  ssm_patch_manager_enabled   = true
  associate_public_ip_address = false

  root_block_device_encrypted = true
  volume_tags_enabled         = true
  root_volume_size            = "80"
  root_volume_type            = "gp2"

  security_group_rules = [
    {
      type        = "egress"
      from_port   = 0
      to_port     = 65535
      protocol    = "-1"
      cidr_blocks = ["0.0.0.0/0"]
    },
  ]

  tags = module.tags.tags
}
