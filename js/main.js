var APIEndPoint = "https://test.purplecosmos.co.za/api/api.aspx";
        let tableRows = "";

    $(document).ready(function() {
      

      $.ajax({
        type: "POST",
        crossDomain: true,
        url: APIEndPoint + "/ListAllJobs",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          for(let i = 0; i < data.d.length; i++) {
            if(data.d[i].Status < 2) {
              tableRows += `<tr>
                                <td>${data.d[i].ClientName}</td>
                                <td>PC000${data.d[i].JobNumber}</td>
                                <td>${data.d[i].Title}</td>
                                <td><a href="./edit-job-details.html">edit</a> / <a  id="btnDeleteJob" href="#">delete</a></td>
                              </tr>`
            } 
          }
        document.getElementById("myTable").innerHTML = tableRows
        console.log( data.d );
        }
      });

      $.ajax({
        type: "POST",
        crossDomain: true,
        url: APIEndPoint + "/GetNextJobNumber",
        contentType: "application/json; charset=utf-8",
          success: function (data) {
            console.log(data.d)
          }
      });

      $.ajax({
        type: "POST",
        crossDomain: true,
        url: APIEndPoint + "/SaveJob",
        data: JSON.stringify(JobDetails), //Updates job with id 4. If Id = 0 then a new job is added
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          console.log(data.d)
        }
      });
    })

    $(".btnDeleteJob").click(function () {

      $.ajax({
        type: "POST",
        crossDomain: true,
        url: APIEndPoint + "/DeleteJob",
        data: '{"JobId": 4 }', //Loads job with id 4.
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          console.log(data)
        }
      });
    });

