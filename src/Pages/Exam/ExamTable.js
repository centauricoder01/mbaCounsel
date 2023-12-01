import React from 'react'
import "./ExamTable.css"

const ExamTable = () => {
  return (
    <div className='exam-table mt-5'   >
      <table  className='exam-tbale-main mb-5 ' >
      <tr>
            <td>
              CAT 2021 Exam Date
            </td>
            <td>
            28th November 2021 (Sunday) To be held in three slot of Morning, Afternoon & Evening
            </td>
          </tr>

          <tr>
            <td>
            CAT 2021 Exam Duration
            </td>
            <td>
            2 Hours (120 Minutes)
            </td>
          </tr>

          <tr>
            <td>
            CAT 2021 Conducting Body
            </td>
            <td>
            IIM Ahmedabad
            </td>
          </tr>



          <tr>
            <td>
            No. of Questions
            </td>
            <td>
            Less than 76 question
            </td>
          </tr>



          <tr>
            <td>
            Question Type
            </td>
            <td>
            MCQs & TITA (Non MCQs)
            </td>
          </tr>




          <tr>
            <td>
            Limit of Test City Prefrences
            </td>
            <td>
            Limit of 6 Test Cities (Max)
            </td>
          </tr>




          <tr>
            <td>
            Section Time Limits
            </td>
            <td>
            40 Minutes to solve each  section
13 Minutes 20 Seconds extra for PwD candidates
            </td>
          </tr>




          <tr>
            <td>
            Total Bschools accepting CAT 2021 score
            </td>
            <td>
            1164 CAT Accepting College
            </td>
          </tr>







      </table>

      <h4  className="mt-4" style={{fontWeight:"600", fontStyle:"italic", color:"#000080" }} >Important Dates</h4>

      <table className='exam-tbale-main mt-3 mb-5 ' >
      <tr>
            <td style={{fontWeight:"600", fontStyle:"italic", color:"#000000" }} >
            CAT 2021 Events
            </td>
            <td style={{fontWeight:"600", fontStyle:"italic", color:"#000000" }}>
            Dates
            </td>
          </tr>

          <tr>
            <td>
            Issue of CAT 
Exam 2021 Notification
            </td>
            <td>
            July 31, 2021
            </td>
          </tr>

          <tr>
            <td>
            CAT Exam 2021 registration
            </td>
            <td>
            August 4, 2021  (10 am) to
September 22, 2021 (closed)
            </td>
          </tr>


          <tr>
            <td>
            CAT 2021 application form
correction window
            </td>
            <td>
            September 25, 2021 (10 am) to
September 27, 2021 (5 pm)
            </td>
          </tr>


          <tr>
            <td>
            Issue of CAT 2021 
admit card
            </td>
            <td>
            October  27, 2021  (5 pm) to
November 28, 2021
            </td>
          </tr>


          <tr>
            <td>
            CAT Exam date 2021
            </td>
            <td>
            November 28, 2021,
Sunday CBT Mode
            </td>
          </tr>



      </table>
      
    </div>
  )
}

export default ExamTable
