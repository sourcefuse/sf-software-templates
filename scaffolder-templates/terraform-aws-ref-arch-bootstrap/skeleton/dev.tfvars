region                   = "us-east-1"
profile                  = "sf_ref_arch"
bucket_name              = "sf-ref-arch-terraform-state"
dynamodb_lock_table_name = "sf_ref_arch_terraform_state"
tags = {
  Environment = "dev"
  ENV         = "dev"
  Project     = "sf-ref-arch"
  Creator     = "terraform"
}
