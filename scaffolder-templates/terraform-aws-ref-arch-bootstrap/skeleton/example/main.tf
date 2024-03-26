terraform {
  required_version = ">= 1.0.8"
}


module "example_module" {
  source                   = "../."
  bucket_name              = "${var.bucket_name}-${var.environment}"
  dynamodb_lock_table_name = "${var.dynamodb_lock_table_name}_${var.environment}"
  # mandatory = "mandatory_string"    // This is not expected here
  profile = var.profile
  region  = var.region
  tags    = var.tags
}
