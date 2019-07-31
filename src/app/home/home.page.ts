import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    myPhoto;
    myPosition;

    constructor(private camera: Camera, private geolocation: Geolocation, private storage: Storage) { }

    openCamera() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then(
            (imageData) => {
                this.myPhoto = 'data:image/jpeg;base64,' + imageData;
                console.log('data:image/jpeg;base64,' + imageData);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    openGallery() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };

        this.camera.getPicture(options).then(
            (imageData) => {
                this.myPhoto = 'data:image/jpeg;base64,' + imageData;
                console.log('data:image/jpeg;base64,' + imageData);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    getGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.myPosition = 'Minha Latitude é ' + resp.coords.latitude + ' e Longitude é ' + resp.coords.longitude;
        }).catch((error) => {
            console.log(error);
        });
    }

    ngOnInit() {
        this.storage.set('word', 'aaaaa');
        this.storage.set('json', { id: 1, nome: 'json' });

        this.storage.get('word').then((val) => {
            console.log(val);
        });

        this.storage.get('json').then((val) => {
            console.log(val);
        });
    }

}
