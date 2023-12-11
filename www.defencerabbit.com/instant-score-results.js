var script_tag = document.getElementById('instantScoreResults')
var website = script_tag.getAttribute("data-website");
var company = script_tag.getAttribute("data-company");

new Vue({

    el: '#instantScore',
    delimiters: ["${", "}"],

    data: {
        passedChecks: null,
        failedChecks: null,
        error: false,
        loading: true,
        cstarScore: null,
        companyName: company,
        grade: {
            letter: null,
            color: null
        },
        employees: null,
        marketCap: null,
        revenue: null,
        city: null,
        state: null,
        country: null,
        ceo: null,
        approvalRating: null,
        severity: {
            5: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjcgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyIENvcHkgODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJDaGFuZ2VzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ2hhbmdlcy1QYW5lbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMzMuMDAwMDAwLCAtMjEwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5LTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMzMuMDAwMDAwLCAyMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0id2FybmluZy1pY29uLWNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0VFM0Q1OCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI3IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktMyIgZmlsbD0iI0ZGRkZGRiIgeD0iMTUiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS0yIiBmaWxsPSIjRkZGRkZGIiB4PSIxNSIgeT0iMTIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS03IiBmaWxsPSIjRkZGRkZGIiB4PSIxMCIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTYiIGZpbGw9IiNGRkZGRkYiIHg9IjEwIiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTkiIGZpbGw9IiNGRkZGRkYiIHg9IjUiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS04IiBmaWxsPSIjRkZGRkZGIiB4PSI1IiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTUiIGZpbGw9IiNGRkZGRkYiIHg9IjIwIiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktNCIgZmlsbD0iI0ZGRkZGRiIgeD0iMjAiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
            4: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjcgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyIENvcHkgODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJDaGFuZ2VzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQ2hhbmdlcy1QYW5lbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMzMuMDAwMDAwLCAtMjEwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMi1Db3B5LTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMzMuMDAwMDAwLCAyMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0id2FybmluZy1pY29uLWNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0VFM0Q1OCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI3IiBoZWlnaHQ9IjE4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktMyIgZmlsbD0iI0ZGRkZGRiIgeD0iMTUiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS0yIiBmaWxsPSIjRkZGRkZGIiB4PSIxNSIgeT0iMTIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS03IiBmaWxsPSIjRkZGRkZGIiB4PSIxMCIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTYiIGZpbGw9IiNGRkZGRkYiIHg9IjEwIiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTkiIGZpbGw9IiNGRkZGRkYiIHg9IjUiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS04IiBmaWxsPSIjRkZGRkZGIiB4PSI1IiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTUiIGZpbGw9IiNGRkZGRkYiIHg9IjIwIiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktNCIgZmlsbD0iI0ZGRkZGRiIgeD0iMjAiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
            3: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjIgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjEgKDUxMTQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT53YXJuaW5nIGljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQnJlYWNoU2lnaHQtQW5hbHlzdC12MSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkJTLS0tQ3VzdG9tZXItRGV0YWlscy0tLUFERC1ERVRBSUwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTYuMDAwMDAwLCAtNDg4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0id2FybmluZy1pY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTYuMDAwMDAwLCA0ODguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRjdBNTAxIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOSIgZmlsbD0iI0ZGRkZGRiIgeD0iNSIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHkiIGZpbGw9IiNGRkZGRkYiIHg9IjUiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS0zIiBmaWxsPSIjRkZGRkZGIiB4PSIxMCIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktMiIgZmlsbD0iI0ZGRkZGRiIgeD0iMTAiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS01IiBmaWxsPSIjRkZGRkZGIiB4PSIxNSIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktNCIgZmlsbD0iI0ZGRkZGRiIgeD0iMTUiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
            2: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTcgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjEgKDUxMTQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkJyZWFjaFNpZ2h0LUFuYWx5c3QtdjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJCUy0tLUN1c3RvbWVyLURldGFpbHMtLS1BREQtREVUQUlMIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODU4LjAwMDAwMCwgLTQ4OC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1OC4wMDAwMDAsIDQ4OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJ3YXJuaW5nLWljb24tY29weS0zIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRUNDRTAxIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTciIGhlaWdodD0iMTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS0zIiBmaWxsPSIjRkZGRkZGIiB4PSI1IiB5PSI0IiB3aWR0aD0iMiIgaGVpZ2h0PSI2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktMiIgZmlsbD0iI0ZGRkZGRiIgeD0iNSIgeT0iMTIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTktQ29weS01IiBmaWxsPSIjRkZGRkZGIiB4PSIxMCIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtOS1Db3B5LTQiIGZpbGw9IiNGRkZGRkYiIHg9IjEwIiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",
            1: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTIgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjEgKDUxMTQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT53YXJuaW5nIGljb24gY29weSAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkJyZWFjaFNpZ2h0LUFuYWx5c3QtdjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJCUy0tLUN1c3RvbWVyLURldGFpbHMtLS1BREQtREVUQUlMIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODk1LjAwMDAwMCwgLTQ4OC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Indhcm5pbmctaWNvbi1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5NS4wMDAwMDAsIDQ4OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNEMUQxMDciIHg9IjAiIHk9IjAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktNSIgZmlsbD0iI0ZGRkZGRiIgeD0iNSIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS05LUNvcHktNCIgZmlsbD0iI0ZGRkZGRiIgeD0iNSIgeT0iMTIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
        },
        tick: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjEgKDUxMTQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5DaGVja21hcmsgYmFkZ2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQ2hlY2ttYXJrLWJhZGdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiMwNEI3OUUiIGN4PSI1IiBjeT0iNSIgcj0iNSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjUsNi4xNjY2NjY2NyBMMy41LDUgQzMuMzM0MzE0NTgsNC43NzkwODYxIDMuMDIwOTEzOSw0LjczNDMxNDU4IDIuOCw0LjkgQzIuNTc5MDg2MSw1LjA2NTY4NTQyIDIuNTM0MzE0NTgsNS4zNzkwODYxIDIuNyw1LjYgTDQuMSw3LjMgQzQuMyw3LjU2NjY2NjY3IDQuNyw3LjU2NjY2NjY3IDQuOSw3LjMgTDcuNiwzLjcgQzcuNzY1Njg1NDIsMy40NzkwODYxIDcuNzIwOTEzOSwzLjE2NTY4NTQyIDcuNSwzIEM3LjI3OTA4NjEsMi44MzQzMTQ1OCA2Ljk2NTY4NTQyLDIuODc5MDg2MSA2LjgsMy4xIEw0LjUsNi4xNjY2NjY2NyBaIiBpZD0iUGF0aC0yIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
        inputWebsite: "",
        domain: website,
        showResults: true,
    },
    mounted: function () {

        // Focus on the search bar, if available
        if (this.$refs.focusField) {
            this.$refs.focusField.focus();
        }

        const query = this.urlSearchParams(document.location.search);
        if (query.get("c")) {
            this.inputWebsite = query.get("c");
        }
        else {
            this.showResults = false;
        }

        var siteToScan = "";

        if (this.inputWebsite.length > 0) {
            siteToScan = this.inputWebsite;
        } else {
            siteToScan = this.domain;
        }

        if (siteToScan.length > 0) {
            const w = this.removeTrailingSlashes(decodeURIComponent(siteToScan));
            this.$http.get(`https://us-central1-cloudscanner-production.cloudfunctions.net/api/instantScore?website=${w}`).then(response => {
                this.loading = false;
                if (response.status == 200) {
                    if (!response.body.statusCode) {
                        const body = response.body;

                        this.passedChecks = body.passed;


                        this.failedChecks = this.sortChecksBySeverity(body.failed);
                        this.cstarScore = body.publicScore;
                        this.grade = this.calcGrade(body.publicScore);

                        if (!this.companyName) {
                            this.companyName = body.vendorName;
                        }

                        if (body.business) {
                            if (body.business.employees) {
                                this.employees = this.numberWithCommas(body.business.employees);
                            }
                            if (body.business.marketCap) {
                                this.marketCap = `$${this.numberWithCommas(body.business.marketCap)}`;
                            }
                            this.revenue = body.business.revenue;
                        }

                        if (body.address) {
                            this.city = body.address.city;
                            this.state = body.address.state;
                            this.country = body.address.country;
                        }

                        if (body.ceo) {
                            this.ceo = body.ceo.name;
                            this.approvalRating = body.ceo.approvalRating;
                        }
                    }
                    else {
                        this.error = true;
                    }
                }
                else {
                    this.error = true;
                }
            });
        }

        this.$nextTick(function () {
            //RE-INIT WF as Vue.js init breaks WF interactions
            Webflow.destroy();
            Webflow.ready();
            Webflow.require('ix2').init();
        });

    },

    methods: {
        calcGrade: function (score) {
            if (score < 200) {
                return { letter: 'F', color: 'red' }
            } else if (score < 400) {
                return { letter: 'D', color: 'orange' }
            } else if (score < 600) {
                return { letter: 'C', color: 'yellow' }
            } else if (score < 800) {
                return { letter: 'B', color: 'lime' }
            } else if (score >= 800) {
                return { letter: 'A', color: 'green' }
            } else {
                return { letter: 'F', color: 'red' }
            }
        },
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        sortChecksBySeverity(checks) {
            if (checks) {
                Object.keys(checks).forEach((category, _) => {
                    checks[category].sort((a, b) => (a.severity > b.severity) ? -1 : ((b.severity > a.severity) ? 1 : 0));
                });
            }
            return checks;
        },
        // Get a URL parameter from the browser
        urlSearchParams: function (query) {
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
        },
        removeTrailingSlashes: function (url) {
            return url.replace(/\/+$/, ''); //Removes one or more trailing slashes from URL
        }
    }
});

Vue.component('report-section-all-checks', {
    delimiters: ["${", "}"],
    props: {
        category: 'String',
        pc: 'Object',
        fc: 'Object',
        title: 'String',
        image: 'String',
        website: 'String',
        company: 'String'
    },
    data: function () {
        return {
            ticked: "https://cloudscanner-production.web.app/img/passed.svg",
            failedIcon: "https://cloudscanner-production.web.app/img/failed.svg",
            failedGroup: "https://cloudscanner-production.web.app/img/failed-group.svg"
        }
    },
    methods: {
        numPassedChecks(category) {
            return this.pc ? this.pc[category] ? this.pc[category].length : 0 : 0;
        },
        numFailedChecks(category) {
            return this.fc ? this.fc[category] ? this.fc[category].length : 0 : 0;
        },
        getPassedChecksInCategory(category) {
            return this.pc[category];
        },
        getFailedChecksInCategory(category) {
            return this.fc[category];
        },
        hasChecksInCategory(category) {
            if (this.pc) {
                return Object.keys(this.pc).includes(category);
            }
            if (this.fc) {
                return Object.keys(this.fc).includes(category);
            }
            return false;
        },
    },
    template: `
            <div class="content-width-xl mb-40" v-if="hasChecksInCategory(category)">
                <div class="card card-no-hover">
                    <div class="card-header bg-primary-50">
                        <div class="row row-align-centre row-justify-between">
                            <div class="icon-text-wrap">
                                <div class="icon-wrap icon-wrap-table"><img
                                        :src="image"
                                        width="24" height="24" alt="Placeholder icon" class="icon"></div>
                                <h4 class="h4 mb-0">\${title}</h4>
                            </div><a rel="nofollow" :href="website" target="_blank" class="badge w-inline-block">
                                <div>\${company}</div>
                                <div class="badge-icon-right w-embed"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.3653 12.56L14.3853 17.56C14.2253 17.72 14.0253 17.8 13.8253 17.8C13.6253 17.8 13.4253 17.72 13.2653 17.56C12.9453 17.24 12.9453 16.74 13.2653 16.42L16.8853 12.78H5.20527C4.76527 12.78 4.40527 12.42 4.40527 11.98C4.40527 11.54 4.76527 11.18 5.20527 11.18H16.8853L13.2653 7.54004C12.9453 7.22004 12.9453 6.72003 13.2653 6.40003C13.5853 6.08003 14.0853 6.08003 14.4053 6.40003L19.3853 11.4C19.6853 11.74 19.6853 12.26 19.3653 12.56Z"
                                            fill="currentColor"></path>
                                    </svg></div>
                            </a>
                        </div>
                    </div>


                    <div v-if="numFailedChecks(category) > 0" v-for="failed in getFailedChecksInCategory(category)" class="card-body card-body-divider">
                        <div class="row no-wrap"><img
                                v-bind:src="failedIcon"
                                loading="auto" alt="failed icon" class="btn-icon-left btn-icon-table">
                            <div>
                                <h5 class="h5 mb-8">\${failed.title}</h5>
                                <div>\${failed.description}</div>
                            </div>
                        </div>
                    </div>

                    <div v-if="numPassedChecks(category) > 0" v-for="passed in getPassedChecksInCategory(category)" class="card-body card-body-divider">
                        <div class="row no-wrap"><img
                                v-bind:src="ticked"
                                loading="auto" alt="passed icon" class="btn-icon-left btn-icon-table">
                            <div>
                                <h5 class="h5 mb-8">\${passed.title}</h5>
                                <div>\${passed.description}</div>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <div class="row row-justify-right">
                            <a class="btn btn-tertiary" href="/cyber-risk/demo">
                                <div>See details</div>
                                <div data-w-id="eea6696d-13fb-1b1f-c5d4-6dfcabc1b50a" data-animation-type="lottie"
                                    data-src="https://assets.website-files.com/5f431ee7b15476612c8e14ad/5f431ee7b1547689c68e1745_arrow-right-primary-500.json"
                                    data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg"
                                    data-default-duration="0.3336669867431323" data-duration="0" data-ix2-initial-state="0"
                                    class="btn-icon-lottie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                        height="24" preserveAspectRatio="xMidYMid meet"
                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                                        <defs>
                                            <clipPath id="__lottie_element_40">
                                                <rect width="24" height="24" x="0" y="0"></rect>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#__lottie_element_40)">
                                            <g transform="matrix(1,0,0,1,8.289999961853027,5.789999961853027)" opacity="1"
                                                style="display: block;">
                                                <g opacity="1" transform="matrix(1,0,0,1,3.6670000553131104,6.210000038146973)">
                                                    <path fill="rgb(22,86,194)" fill-opacity="1"
                                                        d=" M-3.0759999752044678,-5.618000030517578 C-2.7339999675750732,-5.960000038146973 -2.180999994277954,-5.960000038146973 -1.8389999866485596,-5.618000030517578 C-1.8389999866485596,-5.618000030517578 3.1610000133514404,-0.6179999709129333 3.1610000133514404,-0.6179999709129333 C3.325000047683716,-0.45399999618530273 3.4170000553131104,-0.23100000619888306 3.4170000553131104,0.0010000000474974513 C3.4170000553131104,0.2329999953508377 3.325000047683716,0.45399999618530273 3.1610000133514404,0.6179999709129333 C3.1610000133514404,0.6179999709129333 -1.8389999866485596,5.619999885559082 -1.8389999866485596,5.619999885559082 C-2.180999994277954,5.960999965667725 -2.7339999675750732,5.960999965667725 -3.0759999752044678,5.619999885559082 C-3.4170000553131104,5.2779998779296875 -3.4170000553131104,4.7230000495910645 -3.0759999752044678,4.381999969482422 C-3.0759999752044678,4.381999969482422 1.3049999475479126,0.0010000000474974513 1.3049999475479126,0.0010000000474974513 C1.3049999475479126,0.0010000000474974513 -3.0759999752044678,-4.381999969482422 -3.0759999752044678,-4.381999969482422 C-3.4170000553131104,-4.7230000495910645 -3.4170000553131104,-5.276000022888184 -3.0759999752044678,-5.618000030517578z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg></div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        `
});