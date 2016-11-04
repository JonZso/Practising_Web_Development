define [ 'jquery' ], ( $ ) ->

  class TextTools

    constructor: (@start_box, @end_box) ->
      @start_box.click =>
        console.log('Clicked')


      @end_box.click =>
        @revText(@dummy)

    firstText: (input) ->
      @dummy = input.split("").reverse().join("")
      @start_box.text(input)

    revText: (input)  ->
      @end_box.text(input)
