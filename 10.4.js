const giveJobToStudent = (student,jobName)=>{
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
  const newwObj = {
    ...student,
    job: jobName
  }
  return newwObj
}
const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent)