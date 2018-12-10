const knex = require('knex')(require('../db/dbconfig')) 
const user= require('./user')

const getProfile= async (id)=> {
  try {
    const result = await knex('students').where('id', id)
    if (result.length == 0) return new Error("not found")
    return Promise.resolve({avatar: await user.getAvatar(id), role:1,fullname:result[0].fullname,vnuemail : result[0].vnuemail})
  } catch (err) {
    throw err
  }
}

const getCourses= async (id)=> {
  try { 
    const result = await knex('coursesofstudents').where('id', id).select('done','course_id','subject','lecturers')
    if (result.length == 0) return new Error("not found or not have course")
    return result
  } catch (err) {
    throw err
  }
}

const postReport=async(course_id,id,points)=>{
  try { 
    for (var i=0; i < points.length; i++)
      await knex('reportofstudent').insert({'course_id':course_id,'id':id,'criteria_id':points[i].criteria_id,'point':points[i].point})
    await knex('studentsofcourse').where({'id':id,'course_id':course_id}).update({'done': '1'})
    return "OK"
  } catch (err) {
    throw err
  }
}

const getAllStudents= async ()=> {
  try { 
    const result = await knex.select('users.id','users.username','students.fullname','students.vnuemail','students.classname').from('users').rightJoin('students','users.id','students.id')
    if (result.length == 0) return new Error("not found or not have student")
    return result
  } catch (err) {
    throw err
  }
}

module.exports = {
  getProfile,
  getCourses,
  postReport,
  getAllStudents
}