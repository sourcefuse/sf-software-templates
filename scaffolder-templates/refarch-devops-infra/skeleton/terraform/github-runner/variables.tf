################################################################
## shared
################################################################
variable "profile" {
  description = "AWS profile."
}

variable "namespace" {
  description = "Namespace the resources belong to."
  default     = "devops"
}

variable "region" {
  description = "Region to place the resources in."
  default     = "us-east-1"
}


################################################################
## ec2
################################################################
variable "instance_type" {
  description = "The type of the instance	"
  default     = "t3a.medium"
}
