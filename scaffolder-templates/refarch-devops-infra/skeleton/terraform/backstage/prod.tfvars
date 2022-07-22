region       = "us-east-1"
profile      = "refarchprod"
cluster_name = "refarchdevops-prod-devops-k8s-cluster"
environment  = "prod"
# db ssm params
db_cluster_endpoint = "/refarchdevops/prod/primary_cluster/cluster_endpoint"
db_cluster_user     = "/refarchdevops/prod/primary_cluster/cluster_admin_db_username"
db_cluster_password = "/refarchdevops/prod/primary_cluster/cluster_admin_db_password"
# github params
github_token         = "/refarchdevops/prod/backstage/github_token"
github_client_id     = "/refarchdevops/prod/backstage/github_client_id"
github_client_secret = "/refarchdevops/prod/backstage/github_client_secret"

route_53_zone   = "sourcefuse.ninja"
app_domains     = ["dx.sourcefuse.ninja"]
image_repo_name = "sf-refarch-prod-sourcefuse-backstage"
