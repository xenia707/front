const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
];
const online = []
for(const obj of users){
  if(obj.status === 'online'){
    online.push(obj.username)
  }
}
alert(`Сейчас в онлайн следующие пользователи: ${online}`)