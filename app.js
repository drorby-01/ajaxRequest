function getUser() {

    return $.ajax({
        url: "https://randomuser.me/api/?results=50",
        method: "GET",
        success: function (res) {
            return res;
        }
    })

}




async function drawUsersInTable() {
    try{
    const users = await getUser()
    const usersArray = users.results
    $("#tableContainer").append(DrawTableHead())
    usersArray.forEach(element => {
        $("#tableContainer").append(drawUser(element))
    })
    
    }
    catch(e){
        $("#tableContainer").html("<h1>You have an internet problem</h1>")
    }
    
    function drawUser(user) {
        return $(`<tr>
                    <td>${user.name.first} </td>
                    <td>${user.name.last}</td>
                    <td>${user.gender}</td>
                </tr>`)
    }

    function DrawTableHead() {
        return $(`<tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
        </tr>`)
    }

}

drawUsersInTable()
