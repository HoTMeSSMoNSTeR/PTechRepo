let p = $('#test')
let div = $('.my-class')
let ul = $('ul')

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text('New Text')
// $('input').val('New Value');

$('input').attr('placeholder', 'Placeholder Text')

div.prepend('<p>prepended paragraph</p>')
// prepend puts the element at the beginning of the div
div.append('<p>appended paragraph</p>')
// append puts the element inside at the end of the div
div.before('<p>paragraph that was added before the div</p>')
// places the element before the div
div.after('<p>paragraph added after the div</p>')
// places the element after the div

div.empty();
// .empty() will empty everything inside the div, but leave it intact
ul.remove();
// .remove() will remove the ul and everything in it completely!

$('input').hide();
setTimeout(() => $('input').show(), 2000)