import React from 'react'
import blogsData from "@/blog data/blog.json"
import styles from "@/styles/blog.module.css"
import Navbar from '@/component/navbar'

function Blog({blog}) {
  return (
    <>
    <Navbar/>
    
    <div className={styles.main} >
      <ul className={styles.blog}>
        {
          blog.map((eachblog)=>{
           return(
            <div className={styles.bloglist}>
          <h1>    {eachblog.title}</h1>
          <p>{eachblog.content}</p>
            </div>
           )
          })
        }
      </ul>


    </div>
    </>
  )
}

export default Blog

export async function getServerSideProps(){
  return{
    props : {
     blog : blogsData
    }
  }

}