<template>
    <div class="container-fluid">

        <div class="content">
            <h1 class="mb-5 text-center">Documentation</h1>

            <h3>Introduction</h3>
            <my-paragraph>
                This documentation will help you get familiar with the resources of the Rick and Morty API
                and show you how to make different queries, so that you can get the most out of it.
            </my-paragraph>

            <h3>Todo Schema</h3>
            <table>
                <thead>
                <tr>
                    <th>Key</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>id</td>
                    <td>int</td>
                    <td>The id of the todo</td>
                </tr>
                <tr>
                    <td>task</td>
                    <td>string</td>
                    <td>The task title</td>
                </tr>
                <tr>
                    <td>done</td>
                    <td>boolean</td>
                    <td>The status of the task ( 'true', 'false' )</td>
                </tr>
                </tbody>
            </table>

            <h3>Get all tasks</h3>
            <my-paragraph>
                <code>
                    <span class="http-get">GET :</span> /api/v1/todos
                </code>

                <div class="mt-3">Example Response:</div>
                <pre>
                <code>
[
        {
            "id": 1,
            "task": "buy products",
            "done": false
        },
        // ...
]
                </code>
                </pre>
            </my-paragraph>

            <h3>Create task</h3>
            <my-paragraph>
                <code>
                    <span class="text-warning">POST :</span> /api/v1/todos
                </code>

                <div class="mt-3">Example Request:</div>
                <pre>
                <code>
{
     "task": "buy products" (required)
}
                </code>
                </pre>

                <div class="mt-3">Example Response:</div>
                <pre>
                <code>
{
     "id": 1
}
                </code>
                </pre>
            </my-paragraph>

            <h3>Get a single task</h3>
            <my-paragraph>
                <code>
                    <span class="text-green">GET :</span> /api/v1/todos/{id}
                </code>

                <div class="mt-3">Example Response:</div>
                <pre>
                <code>
{
     "id": 1,
     "task": "buy products",
     "done": false
}
                </code>
                </pre>
            </my-paragraph>

            <h3>Delete task</h3>
            <my-paragraph>
                <code>
                    <span class="text-red">DELETE :</span> /api/v1/todos/{id}
                </code>

                <div class="mt-3">Example Response:</div>
                <pre>
                <code>
{
     "status": "ok"
}
                </code>
                </pre>
            </my-paragraph>

            <h3>Update task</h3>
            <my-paragraph>
                <code>
                    <span class="text-primary">UPDATE :</span> /api/v1/todos/{id}
                </code>

                <div class="mt-3">Example Request:</div>
                <pre>
                <code>
{
     "done": false
}
                </code>
                </pre>

                <div class="mt-3">Example Response:</div>
                <pre>
                <code>
{
     "status": "ok"
}
                </code>
                </pre>
            </my-paragraph>
        </div>
    </div>
</template>

<script>
export default {
    name: "DocsPage",
};
</script>

<style scoped>
code {
    color: #abb2bf;
}

.text-red {
    color: var(--red);
}

.text-green {
    color: var(--green);
}

table {
    line-height: 1.5rem;
    margin-bottom: 4rem;
    width: 100%;
}

td, th {
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 2rem;
}

.content {
    margin: 2rem 0;
}

p {
    margin-bottom: 4rem;
}
</style>