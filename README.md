# Gatsby Theme Slideshow Example

This repo is a simple slideshow gatsby theme with working demo.

It includes:
- the slideshow theme (located in `theme/`)
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

## How to use this repo

1.  Clone this repo

2.  Run `yarn`

3.  Start the demo site.
    ```sh
    yarn workspace demo develop
    ```

    The demo will start at http://localhost:8000

    **NOTE:** If you’re new to Yarn workspaces, check out [this post](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) for details.

4.  Start editing the theme! The demo site is configured to use the local theme, so any changes you make to the local `theme` directory will be reflected on the demo site for easy local development.

5.  If you're having issues with the site not updating you may need to delete the `.cache` directory in `/demo` and rebuild.
