<template>
    <div class="container-fluid">
        <h1 class="my-4 text-center">About</h1>

        <h3>What is this?</h3>
        <my-paragraph>
            This is a Todo REST API that allows to interact with to-do items. The functionality will be expanded with
            new features.

            <router-link class="text-decoration-none text-warning" to="/docs">
                Check out the documentation section to get started.
            </router-link>
            <hr>
        </my-paragraph>

        <h3>Who am I?</h3>
        <my-paragraph>
            I am Olya, a beginner developer who likes to create things and a student of KPI University.
            <hr>
        </my-paragraph>

        <h3>Why did I built this?</h3>
        <my-paragraph>
            Because I was interested in the idea of writing a real project and also because it's fun, so why
            not?
            <hr>
        </my-paragraph>

        <h3>Technical stuff?</h3>
        <my-paragraph>
            We use Node and MongoDB to serve the API. All the data is formatted in json and the entire project is hosted
            on Digital Ocean and Netlify.
            <hr>
        </my-paragraph>

        <h3>How can you contribute to the project?</h3>
        <my-paragraph>
            You can help us to keep the project alive and you can also contribute on GitHub.
        </my-paragraph>
    </div>
</template>

<script>
export default {
    name: "AboutPage",
};
</script>

<style scoped>
h1,
h3 {
    font-weight: bold;
}

p {
    margin-bottom: 2.5rem;
}
</style>