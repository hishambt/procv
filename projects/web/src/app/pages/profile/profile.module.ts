import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';

import { SSTextComponent } from 'softside-ui/lib/components/inputs/text';
import { SSEmailComponent } from 'softside-ui/lib/components/inputs/email';
import { SSTextareaComponent } from 'softside-ui/lib/elements';
import { SSPasswordComponent } from 'softside-ui/lib/components/inputs/password';
import { SSConfirmPasswordComponent } from 'softside-ui/lib/components/composed/confirm-password';

import { SharedModule } from '../../shared/shared.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
	declarations: [
		ProfileViewComponent,
	],
	imports: [
		SharedModule,
		ProfileRoutingModule,
		ImageCropperModule,
		SSTextComponent,
		SSEmailComponent,
		SSTextareaComponent,
		SSPasswordComponent,
		SSConfirmPasswordComponent,
	],
})
export class ProfileModule { }
