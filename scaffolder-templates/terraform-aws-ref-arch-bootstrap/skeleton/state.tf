terraform {
  required_version = ">= 1.0.8"

  backend "s3" {
    region         = "us-east-1"
    key            = "${{ values.name }}/terraform.tfstate"
    bucket         = "${{ values.bucket_name }}"
    dynamodb_table = "${{ values.dynamodb_lock_table_name }}"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 2.0"
    }
  }
}
