function readFile() {
        jQuery.get("E:/Spyder projects/Expense/graph_datapoints.txt",function(txt) {
                $('#output').text(txt);
                    });
        } 
