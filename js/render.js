function RenderPage(data) {
    var Structor = data.structor.split(' ');
    var Result="";
    for (const item of Structor) {
        if (data[item] == undefined) {
            continue;
        }
        Result += data[item];
    }
    return Result;
}
function RenderSection(item) {
    var Result='';
    for (const dataitem of item.data) {
        var template = item.template;
        for (const dataitem2 in dataitem) {
            var key = "{-"+dataitem2+"-}";
            template = template.replace(key, dataitem[dataitem2]);
        }
        if (template != undefined) {
            Result += template;
        }
        
    }
    return Result;
}