(function ($) {
    let $input = $(".todoInput");
    $input.on("keydown", (ev) => {
        if (ev.keyCode === 13) {
            // 添加数据处理
            // 发送ajax请求
            $.ajax({
                url: "/item/add",
                type: "post",
                dataType: "json",
                data: {
                    task: $input.val()
                },
                success: (result) => {
                    const data = result.data;
                    if (result.code === 0) {
                        const $dom = $(`<li data-id="${data.id}">${data.task}</li>`);
                        $("ul").append($dom);
                        $input.val("");
                    }else {
                        alert("获取数据失败");
                    }
                },
                error: err => {
                    console.log(err);
                }
            })
        }
    });

    // 删除数据处理(事件委托)
    $("ul").on('click', "li", function () {
        let $this = $(this);
        $.ajax({
            url: "/item/delete/" + $this.data("id"),
            type: "get",
            dataType: "json",
            success: data => {
                if (data.code === 0) {
                    $this.remove();
                }else {
                    alert(data.massage);
                }
            },
            error: err => {
                console.log(err);
            }
        })
    })
})(jQuery);

