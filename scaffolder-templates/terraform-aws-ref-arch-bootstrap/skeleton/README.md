# terraform-aws-ref-arch-bootstrap

[![Known Vulnerabilities](https://github.com/sourcefuse/terraform-aws-ref-arch-bootstrap/actions/workflows/snyk.yaml/badge.svg)](https://github.com/sourcefuse/terraform-aws-ref-arch-bootstrap/actions/workflows/snyk.yaml)

## Overview

AWS bootstrap module for the SourceFuse reference architecture. Creates resources used for Terraform state.

## First Time Usage

Comment out the contents of `state.tf`.

Initilize Terraform

```shell
terraform init
```

Create a `dev` workspace

```shell
terraform workspace new dev
```

Apply Terraform

```shell
terraform apply -var-file=dev.tfvars
```

Uncomment the contents of `state.tf`. Initilize Terraform again and migrate the state.

```shell
terraform init
```

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.8 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 2.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_bootstrap"></a> [bootstrap](#module\_bootstrap) | git::https://github.com/sourcefuse/terraform-module-aws-bootstrap | 1.0.0 |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_bucket_name"></a> [bucket\_name](#input\_bucket\_name) | Name of the bucket used for storing Terraform state | `string` | n/a | yes |
| <a name="input_dynamodb_lock_table_name"></a> [dynamodb\_lock\_table\_name](#input\_dynamodb\_lock\_table\_name) | Name of the lock table used for Terraform state. | `string` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Name of the environment, i.e. dev, stage, prod | `string` | `"dev"` | no |
| <a name="input_profile"></a> [profile](#input\_profile) | AWS Config profile | `string` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | AWS Region | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Default tags to apply | `map(string)` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_state_bucket_arn"></a> [state\_bucket\_arn](#output\_state\_bucket\_arn) | State bucket ARN |
| <a name="output_state_bucket_name"></a> [state\_bucket\_name](#output\_state\_bucket\_name) | State bucket name |
| <a name="output_state_lock_table_arn"></a> [state\_lock\_table\_arn](#output\_state\_lock\_table\_arn) | State lock table ARN |
| <a name="output_state_lock_table_name"></a> [state\_lock\_table\_name](#output\_state\_lock\_table\_name) | State lock table name |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->

## Development

### Prerequisites

- [terraform](https://learn.hashicorp.com/terraform/getting-started/install#installing-terraform)
- [terraform-docs](https://github.com/segmentio/terraform-docs)
- [pre-commit](https://pre-commit.com/#install)
- [golang](https://golang.org/doc/install#install)
- [golint](https://github.com/golang/lint#installation)

### Configurations

- Configure pre-commit hooks

```sh
pre-commit install
```

- Configure golang deps for tests

```sh
> go get github.com/gruntwork-io/terratest/modules/terraform
> go get github.com/stretchr/testify/assert
```
## Git Commmits

while Contributing or doing git commit please specify the breaking change in your commit message whether its major,minor or patch

For Example

```sh
git commit -m "your commit message #major"
```
By specifying this , it will bump the version and if you dont specify this in your commit message then by default it will consider patch and will bump that accordingly
### Tests

- Tests are available in `test` directory

- In the test directory, run the below command

```sh
go test
```

<!-- BEGIN_TF_DOCS -->

## Requirements

| Name                                                                     | Version  |
| ------------------------------------------------------------------------ | -------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | ~> 1.0.5 |

## Providers

No providers.

## Modules

| Name                                                           | Source                                                   | Version |
| -------------------------------------------------------------- | -------------------------------------------------------- | ------- |
| <a name="module_bootstrap"></a> [bootstrap](#module_bootstrap) | git@github.com:sourcefuse/terraform-module-aws-bootstrap | 1.0.0   |

## Resources

No resources.

## Inputs

| Name                                                                                                      | Description                                         | Type          | Default | Required |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------- | ------- | :------: |
| <a name="input_bucket_name"></a> [bucket_name](#input_bucket_name)                                        | Name of the bucket used for storing Terraform state | `string`      | n/a     |   yes    |
| <a name="input_dynamodb_lock_table_name"></a> [dynamodb_lock_table_name](#input_dynamodb_lock_table_name) | Name of the lock table used for Terraform state.    | `string`      | n/a     |   yes    |
| <a name="input_environment"></a> [environment](#input_environment)                                        | Name of the environment, i.e. dev, stage, prod      | `string`      | `"dev"` |    no    |
| <a name="input_profile"></a> [profile](#input_profile)                                                    | AWS Config profile                                  | `string`      | n/a     |   yes    |
| <a name="input_region"></a> [region](#input_region)                                                       | AWS Region                                          | `string`      | n/a     |   yes    |
| <a name="input_tags"></a> [tags](#input_tags)                                                             | Default tags to apply                               | `map(string)` | n/a     |   yes    |

## Outputs

| Name                                                                                               | Description           |
| -------------------------------------------------------------------------------------------------- | --------------------- |
| <a name="output_state_bucket_arn"></a> [state_bucket_arn](#output_state_bucket_arn)                | State bucket ARN      |
| <a name="output_state_bucket_name"></a> [state_bucket_name](#output_state_bucket_name)             | State bucket name     |
| <a name="output_state_lock_table_arn"></a> [state_lock_table_arn](#output_state_lock_table_arn)    | State lock table ARN  |
| <a name="output_state_lock_table_name"></a> [state_lock_table_name](#output_state_lock_table_name) | State lock table name |

<!-- END_TF_DOCS -->

## Authors

This project is authored by below people

- SourceFuse
