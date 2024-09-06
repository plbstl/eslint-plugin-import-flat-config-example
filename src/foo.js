import * as names from './named-exports'

function great() {
  return names.a + names.b  // so great https://youtu.be/ei7mb8UxEl8
}

function notGreat() {
  doSomethingWith(names.c) // Reported: 'c' not found in imported namespace 'names'.

  const { a, b, c } = names // also reported, only for 'c'
}

// also tunnels through re-exported namespaces!
function deepTrouble() {
  doSomethingWith(names.deep.e) // fine
  doSomethingWith(names.deep.f) // Reported: 'f' not found in deeply imported namespace 'names.deep'.
}
