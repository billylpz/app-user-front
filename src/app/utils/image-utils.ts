export class ImageUtils {

    static resize(url: string | null, width: number) {
        if (url != null) {
            return url.replace('/upload/', `/upload/w_${width}/`);
        }
        return null;
    }
}