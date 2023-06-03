import StudentsPage from 'components/Pages/Recruitor/StudentsPage'
import SEO from 'components/SEO'

import React from 'react'

export default function Students() {
  return (
      <>
          <SEO />
          <StudentsPage selected={false} />
      </>
  )
}
