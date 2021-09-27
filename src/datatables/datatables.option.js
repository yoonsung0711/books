module.exports = {
    data: require('./datatables.seed').dataSet,
    paging: true,
    processing: true,
    info: true,
    columns: require('./datatables.seed').columns,
    lengthMenu: [ 
        [ 10, 25, 50, -1 ], 
        [ 10, 25, 50, "All" ] 
    ],
    serverSide: false,
    paging: true,
    createdRow: function (row, data, index) {
        $.each($('td', row), function (colIndex) {
            if (colIndex == 0) {
                $(this).attr('data-name', 'bookname');
                $(this).attr('class', 'bookname');
                $(this).attr('data-type', 'text');
                $(this).attr('data-pk', data[0]);
            }
            if (colIndex == 1) {
                $(this).attr('data-name', 'writer');
                $(this).attr('class', 'writer');
                $(this).attr('data-type', 'text');
                $(this).attr('data-pk', data[0]);
            }
            if (colIndex == 3) {
                $(this).attr('data-name', 'year');
                $(this).attr('class', 'year');
                $(this).attr('data-type', 'select');
                $(this).attr('data-pk', data[0]);
            }
        })
        if (data[3] !== '') {
            $('td', row).eq(3).addClass('highlight');
        }
    },
    // footerCallback: function ( row, data, start, end, display ) {
    //     var api = this.api(), data;
    //     total = api
    //         .column( 3 )
    //         .data()
    //         .reduce( function (acc, curr) {
    //             return acc + 1
    //         }, 0 );

    //     $( api.column( 4 ).footer() ).html(
    //         total +' 권'
    //     );
    // },
    dom: 'Bfrtip',
    buttons: [
        'copy', 'excel', 'print'
    ],
    fnRowCallback: function (row, data, iDisplayIndex) {
        var id = data.id;
        // var url = "<?= URL::to('/');?>" +"/user/" +id +"/edit";
        // var ref = url;
        // $(row).attr("title","View Detail - " + data.name +' ' + data.surname );
        // $(row).attr("href",ref);
        // $(row).attr("data-toggle","modal");
        // $(row).attr("data-target","#modal-edit");
        // $(row).addClass('ui-pointer');
        // $(row).addClass('popup-edit');
        return row;
    }
}
