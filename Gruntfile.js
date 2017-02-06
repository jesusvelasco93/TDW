module.exports = function(grunt){
    //Configuración de Grunt
    var settings = {
        concat: {
          options: {
              separator: ';',
              process: false,
              stripBanners: {
                  block: true
              }
          },
          javascript: {
              src: [
                  'desarrollo/js/*.js',
              ],
              dest: 'dist/javascript/script.js'
          }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            built: {
                files: {
                    'dist/javascript/script.min.js': ['dist/javascript/script.js']
                }
            }
        },
        less:{
            style:{
                files:{//archivos a compilar
                "dist/css/style.css":"desarrollo/less/style.less" //destino:origen
             }
          }
        },
        watch:{
            styles:{
                files:["desarrollo/less/*.less"], //Observa cualquier cambio en archivo less
                tasks:["less"], //Ejecuta la compilación CSS
                options:{
                  spawn: false
               }
            }
        }
       
    };
    //Cargamos la configuración de Grunt
    grunt.initConfig(settings);
    //Cargamos plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Definimos tareas disponibles para grunt-cli
    grunt.registerTask('default',['less','watch','concat']);
    grunt.registerTask('production',['less','watch','concat','uglify']);
}