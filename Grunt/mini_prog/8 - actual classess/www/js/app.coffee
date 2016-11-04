
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

# requirejs.config
#   shim:
#     'app/main': ['lib/jquery'],
# 		'app/endBox' : ['lib/jquery']
#
#
#
# define ['app/main', 'app/endBox'], (jquery) ->
# 	$('#start_box').text('click here to move this text. it will be reversed..')
# 	window.x = $('#start_box').html()
# 	window.backway = x.split("").reverse().join("")
#
# # define ['app/endBox'], (jquery) ->
#   console.log('t')







#____________________________________#
#____________[ withshim ]____________#

# requirejs.config
#   shim:
#     'app/main':
#      deps: ['lib/jquery'],
#      exports: 'main'
#
# define(['app/main','app/endBox']) ->
#   return


#____________________________________#
#____________[ plainreq ]____________#


require.config
    baseUrl: 'Build/js',
    paths:
        # 'jquery' : '../../js/lib/jquery'
        'jquery' : '../../node_modules/jquery/dist/jquery'


require ["jquery","app/TextTools"], ($, TextTools) ->
    test = new TextTools $("#start_box"), $("#end_box")
    test.firstText('Click To Reverse')

# require ["jquery","app/main","app/user","app/endBox"]
#require ["jquery","app/main","app/endBox"]
