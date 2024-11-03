export class Activity {
    constructor(title, year, director, duration, genres, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genres = genres;
        this.rate = rate;
        this.poster = poster;
    }
}

export class Repository {
    static getFormData() {
        const title = $("#title").val();
        const year = parseInt($("#year").val());
        const director = $("#director").val();
        const duration = $("#duration").val();
        const genres = $("input[name='genre']:checked").map(function() { return this.value; }).get();
        const rate = parseFloat($("#rate").val());
        const poster = $("#poster").val();

        return new Activity(title, year, director, duration, genres, rate, poster);
    }

    static clearForm() {
        $("#title").val("");
        $("#year").val("");
        $("#director").val("");
        $("#duration").val("");
        $("input[name='genre']").prop("checked", false);
        $("#rate").val("");
        $("#poster").val("");
    }
}
