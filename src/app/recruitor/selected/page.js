import StudentsPage from 'components/Pages/Recruitor/StudentsPage'
import SEO from 'components/SEO'

import React from 'react'

export default function Selected() {
  return (
      <>
          <SEO />
          <StudentsPage selected={true} />
      </>
  )
}
