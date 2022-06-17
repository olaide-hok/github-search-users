## Starter Project

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

## React Router Dom

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## KEYCLOAK

- The Keycloak used to authenticate this application was hosted locally following the steps provided in [KEYCLOAK OPEN JDK DOCS](https://www.keycloak.org/getting-started/getting-started-zip).

- An online/cloud hosting for keycloak is by using [OpenShift Container Platform](https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform), this could be started clicking [here](https://manage.openshift.com/).
- Another option is to deploy keycloak authentication server on  [AWS Elastic Kubernetes Container](https://aws.amazon.com/eks/).


- Provided Social Logins on Keycloak for authentication are Github and Google.
  
- Keycloak's client-side JavaScript library is used to secure this application as documented in [here](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter).

## Deployment

[Netlify](https://www.netlify.com/)

To visit the deployed web app click [here](https://github-search-keycloak-auth.netlify.app/).

#####Note
This Web Application is still being developed.