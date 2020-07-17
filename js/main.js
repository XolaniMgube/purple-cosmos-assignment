var APIEndPoint = "https://test.purplecosmos.co.za/api/api.aspx";
        let emptyString = "";

    $(document).ready(function() {
      

      $.ajax({
        type: "POST",
        crossDomain: true,
        url: APIEndPoint + "/ListAllJobs",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          for(let i = 0; i < data.d.length; i++) {
            if(data.d[i].Status < 2) {
              emptyString += `<tr>
                                <td>${data.d[i].ClientName}</td>
                                <td>${data.d[i].JobNumber}</td>
                                <td>${data.d[i].Title}</td>
                                <td><a href="#">edit</a> / <a href="#">delete</a></td>
                              </tr>`
            } 
          }
        document.getElementById("myTable").innerHTML = emptyString
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
    })