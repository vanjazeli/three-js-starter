# Three.js WebGL Starter

Three.js project starter that I use for my personal WebGL projects.

## Getting Started

### Initialization

- Make sure to open the root directory of this project and open a terminal of your choice inside it.
- Run `npm install gulp gulp-cli -g` command to install gulp and gulp-cli globally.
- Run `npm install` command to install all of the npm packages used in this starter.
- Install "Prettier" extension inside of your code editor. (optional - read the formatting disclaimer below for more info)

Your starter is ready for use.

### Formatting disclaimer

For the best formatting experience, it is highly recommended to install the "Prettier" extension inside of your code editor. This proves particularly beneficial in group projects, as it guarantees uniform code formatting across team members, thereby avoiding numerous unnecessary Git conflicts. The code formatting rules are standardized and enforced through the ".prettierrc" and ".prettierignore" files, ensuring consistency for all team members involved. If you don't wish to use this type of formatting, skip installing the "Prettier" extension and feel free to delete ".prettierrc" and ".prettierignore" files.

## Commands

### Development mode

The `npm run dev` command initiates the development mode build process of the project. This mode prioritizes efficiency by skipping minification and code optimization processes, allowing developers to save time during the development phase.

Upon execution, the project is built inside the designated "dist" folder. Additionally, the command sets up an automatic watch mechanism on the "src" folder, monitoring for any changes in the source code.

As changes are detected, this mode triggers an immediate rebuild of the project, updating the contents of the "dist" folder accordingly. Consequently, the new version of code will automatically open inside of a browser.

### Production mode

The `npm run prod` command initiates the production mode build process of the project. In this mode, the code goes through important optimizations, like preprocessing and minification, to ensure it runs efficiently and takes up less space. However, these optimizations make the build process take a bit longer, as it requires careful handling of the code.

Once executed, the project is built inside the designated "dist" folder, following industry best practices for organizing and structuring code for production. Additionally, the command sets up an automatic watch feature, keeping an eye on the source code located in the "src" folder.

The purpose of this mode is to build the project's final version. However, even after the build, the watch feature remains active for the 'src' folder, in case you want to do some testing in this mode.

### Generating icons

The `npm run icons` command generates a new icon font using all the .svg icons from the 'src/assets/icons' folder. It also generates the class names for each of the icons. After generating these assets, the styles containing icon class names and the newly generated font get added to the 'dist' folder. This allows developers to easily incorporate and style the icons in their project.

### Moving assets

The `npm run assets` command moves all subfolders from the 'src/assets' directory to the 'dist/assets' directory, except for the 'icons' folder, since it's only used to generate the icon font.

## Licence

Completely free for use in all types of commercial or personal projects. Mentions are required when uploading or reposting any of original or modified code from this repo.

Feel free to visit the original using this [link](https://www.github.com/vanjazeli/three-js-starter).
