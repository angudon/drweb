function urlSearchParams(query) {
    query = query.substring(1);
    var q = {};
    var items = query.split("&");
    for (var i = 0; i < items.length; i++) {
        var predicate = items[i].split("=");
        if (predicate.length > 1) {
            q[predicate[0]] = predicate[1];
        } else {
            q[predicate[0]] = true;
        }
    }

    return {
        get: function (param) {
            return q[param];
        }
    }
}