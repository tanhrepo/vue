Array.from(document.querySelectorAll('div'))
Array.prototype.slice.call(document.querySelectorAll('div'));
[...document.querySelectorAll('div')]
Array.prototype.concat.apply([],document.querySelectorAll('div'))
