
###################################################
# TODO: my requireJS file.                        #
#  withshim = is written where it uses shim       #
#                                                 #
#  plainreq = is written using basic requireJS    #
#                                             ~J  #
###################################################


#_____________________________________#
#____[ Buttons Devined in here ]_____#
###########################################################
#  If using this feature... open main.CoffeeScript				#
#  and enable original rather than modified								#
#																													#
###########################################################



requirejs.config
  shim:
    'app/main':
     deps: ['lib/jquery'],
     exports: 'main'

define ['app/main'], (jquery) ->
	$('#start_box').text('click here to move this text. it will be reversed..')
	$x = $('#start_box').html()
	window.backway = $x.split("").reverse().join("")

	$("#end_box").click ->
		 $("#end_box").text("")
		 $("#start_box").text($x)





#____________________________________#
#____________[ withshim ]____________#

# requirejs.config
#   shim:
#     'app/main':
#      deps: ['lib/jquery'],
#      exports: 'main'
#
# define(['app/main']) ->
#   return


#____________________________________#
#____________[ plainreq ]____________#


# require.config
#     baseUrl: 'js/lib',
#     paths:
#         app: '../app'
#
# require ["jquery","app/main"]
