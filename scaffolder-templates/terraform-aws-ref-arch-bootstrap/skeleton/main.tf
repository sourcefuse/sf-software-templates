module "bootstrap" {
  source        = "git::https://github.com/sourcefuse/terraform-module-aws-bootstrap?ref=1.0.0"
  bucket_name   = "${var.bucket_name}-${var.environment}"
  dynamodb_name = "${var.dynamodb_lock_table_name}_${var.environment}"
  tags          = var.tags
}
