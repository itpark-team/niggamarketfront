import axios from "axios";

class AnnouncementsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "https://localhost:7156/announcements"
            baseURL: "http://localhost/api/announcements"
        });
    }

    async getAllCards() {
        return await this.#axios.get("/get-all-cards");
    }

    async getPageById(id) {
        return await this.#axios.get(`/get-page-by-id/${id}`);
    }


}

export default AnnouncementsApiWorker;