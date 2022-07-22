region       = "us-east-1"
cluster_name = "refarchdevops-dev-devops-k8s-cluster"
environment  = "dev"

# db ssm params
db_cluster_endpoint = "/refarchdevops/dev/primary_cluster/cluster_endpoint"
db_cluster_user     = "/refarchdevops/dev/primary_cluster/cluster_admin_db_username"
db_cluster_password = "/refarchdevops/dev/primary_cluster/cluster_admin_db_password"

# github params
github_token         = "/refarchdevops/dev/backstage/github_token"
github_client_id     = "/refarchdevops/dev/backstage/github_client_id"
github_client_secret = "/refarchdevops/dev/backstage/github_client_secret"

route_53_zone   = "sfrefarch.com"
app_domains     = ["dx.sfrefarch.com"]
image_repo_name = "sf-refarch-dev-sourcefuse-backstage"
