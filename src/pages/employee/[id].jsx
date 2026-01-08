import React from 'react'

const employeeDetails = ({employees}) => {
  return (
    <div>{employees.password}</div>
  )
}

export default employeeDetails

export async function getServerSideProps(context) {
  const {params} = context
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);
  const data = await res.json();
  return {
    props: {
      employees: data
    }
  }
}

