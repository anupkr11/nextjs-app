import React from 'react'

const index = ({ employees }) => {
  return (
    <>
      {employees.users.map((employee) => (
        <div key={employee.id}>
          <h2>
            {employee.firstName} {employee.lastName}
          </h2>
          <p>{employee.email}</p>
        </div>
      ))}
    </>
  );
}

export default index

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  return {
    props: {
      employees: data
    }
  }
}