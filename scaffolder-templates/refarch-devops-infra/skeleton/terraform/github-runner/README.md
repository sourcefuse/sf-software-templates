# Reference Architecture DevOps Infrastructure: Github Runner

## Overview

AWS Github Actions Runner for the SourceFuse DevOps Reference Architecture Infrastructure.   

## First Time Usage

Initialize Terraform
```shell
terraform init -backend-config=backend-config.dev.hcl
```

Create a `dev` workspace
```shell
terraform workspace new dev
```

Apply Terraform
```shell
terraform apply 
``` 

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.1.3 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 4.4.0 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_runner"></a> [runner](#module\_runner) | cloudposse/ec2-instance/aws | 0.41.0 |
| <a name="module_ssh_key_pair"></a> [ssh\_key\_pair](#module\_ssh\_key\_pair) | cloudposse/key-pair/aws | 0.18.2 |
| <a name="module_tags"></a> [tags](#module\_tags) | git@github.com:sourcefuse/terraform-aws-refarch-tags | 1.0.1 |

## Resources

| Name | Type |
|------|------|
| [aws_security_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/security_group) | data source |
| [aws_subnets.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnets) | data source |
| [aws_subnets.public](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnets) | data source |
| [aws_vpc.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/vpc) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | The type of the instance | `string` | `"t3a.medium"` | no |
| <a name="input_namespace"></a> [namespace](#input\_namespace) | Namespace the resources belong to. | `string` | `"devops"` | no |
| <a name="input_profile"></a> [profile](#input\_profile) | AWS profile. | `any` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | Region to place the resources in. | `string` | `"us-east-1"` | no |

## Outputs

No outputs.
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
