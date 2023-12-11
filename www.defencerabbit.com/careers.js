new Vue({

    el: '#jobs',
    delimiters: ["${", "}"],

    data: {
        error: false,
        loading: true,
        showResults: true,
        jobs: {}
    },
    mounted: function () {

        this.$http.get("https://api.lever.co/v0/postings/upguard?mode=json").then(response => {
            this.loading = false;
            if (response.status == 200) {
                const body = response.body;
                if (body) {
                    body.forEach((job) => {
                        const categories = job.categories;
                        const department = categories.department;
                        this.jobs[department] = [];
                    });
                    body.forEach((job) => {
                        const categories = job.categories;
                        const department = categories.department;

                        const jobDetails = {};
                        jobDetails.title = job.text;
                        jobDetails.hostedUrl = job.hostedUrl;
                        jobDetails.location = categories.location;

                        this.jobs[department].push(jobDetails);
                    });
                }
            }
            else {
                this.error = true;
            }
        });
    },
});