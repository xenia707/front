const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}
function handleObject(obj, key, action){
  if(action==='get'){
    return obj[key]
  }if(action==='add'){
    obj[key] = ''
    return obj
  }if(action==='delete'){
    delete obj[key]
    return obj
  }
  return obj
}
const result = handleObject(student, 'programmingLanguage', 'delete')
console.log('result', result) // { name: 'Maxim' }