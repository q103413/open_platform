define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'appstore/applist/index',
                    add_url: 'appstore/applist/add',
                    edit_url: 'appstore/applist/edit',
                    del_url: 'appstore/applist/delApps',
                    multi_url: 'appstore/applist/multi',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                columns: [
                    [
                        {field: 'state2', checkbox: true, },
                        {field: 'id', title: 'ID'},
                        {field: 'name', title: __('appname')},
                        {field: 'is_default', title: __('app type')},
                        {field: 'logo', title: __('applogo')},
                        {field: 'url', title: __('appurl')},
                        {field: 'state', title: __('Status')},
                        // {field: 'status', title: __("Status"), formatter: Table.api.formatter.status},
                        // {field: 'd', title: __('addapps'), formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Form.api.bindevent($("form[role=form]"));
        },
        edit: function () {
            Form.api.bindevent($("form[role=form]"));
        }
    };
    return Controller;
});