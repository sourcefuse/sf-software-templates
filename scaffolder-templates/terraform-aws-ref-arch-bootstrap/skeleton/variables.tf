variable "environment" {
  type        = string
  description = "Name of the environment, i.e. dev, stage, prod"
  default     = "dev"
}

variable "bucket_name" {
  type        = string
  description = "Name of the bucket used for storing Terraform state"
}

variable "dynamodb_lock_table_name" {
  type        = string
  description = "Name of the lock table used for Terraform state."
}

variable "profile" {
  type        = string
  description = "AWS Config profile"
}

variable "region" {
  type        = string
  description = "AWS Region"
}

variable "tags" {
  description = "Default tags to apply"
  type        = map(string)
}
