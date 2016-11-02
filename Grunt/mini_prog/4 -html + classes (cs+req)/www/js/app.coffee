
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
    'app/main': ['lib/jquery'],
		'app/endBox' : ['lib/jquery']



define ['app/main', 'app/endBox'], (jquery) ->
	$('#start_box').text('click here to move this text. it will be reversed..')
	window.x = $('#start_box').html()
	window.backway = x.split("").reverse().join("")

# define ['app/endBox'], (jquery) ->
#   console.log('t')







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
