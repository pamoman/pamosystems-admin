import type { Struct, Schema } from '@strapi/strapi';

export interface SharedMui extends Struct.ComponentSchema {
  collectionName: 'components_shared_muis';
  info: {
    displayName: 'MUI';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'house'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    icon: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.DefaultTo<'house'>;
    location: Schema.Attribute.Enumeration<['internal', 'external']>;
  };
}

export interface SharedFontAwesome extends Struct.ComponentSchema {
  collectionName: 'components_shared_font_awesomes';
  info: {
    displayName: 'Font Awesome';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['house', 'address-card']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'house'>;
  };
}

export interface SharedEmployee extends Struct.ComponentSchema {
  collectionName: 'components_shared_employees';
  info: {
    displayName: 'employee';
  };
  attributes: {
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PageIcon extends Struct.ComponentSchema {
  collectionName: 'components_page_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Relation<'oneToOne', 'api::icon.icon'>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'page.heading', false> &
      Schema.Attribute.Required;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface PageHeading extends Struct.ComponentSchema {
  collectionName: 'components_page_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'BUTTON',
        'caption',
        'OVERLINE',
      ]
    > &
      Schema.Attribute.DefaultTo<'h1'>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
  };
}

export interface ContentWysiwyg extends Struct.ComponentSchema {
  collectionName: 'components_content_wysiwygs';
  info: {
    displayName: 'WYSIWYG';
    description: '';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ContentVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface ContentSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_content_slideshows';
  info: {
    displayName: 'Slideshow';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ContentHeading extends Struct.ComponentSchema {
  collectionName: 'components_content_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    component: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Schema.Attribute.DefaultTo<'h1'>;
    variant: Schema.Attribute.Enumeration<
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'BUTTON',
        'caption',
        'OVERLINE',
      ]
    > &
      Schema.Attribute.DefaultTo<'h2'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.mui': SharedMui;
      'shared.link': SharedLink;
      'shared.font-awesome': SharedFontAwesome;
      'shared.employee': SharedEmployee;
      'page.icon': PageIcon;
      'page.hero': PageHero;
      'page.heading': PageHeading;
      'global.footer': GlobalFooter;
      'content.wysiwyg': ContentWysiwyg;
      'content.video': ContentVideo;
      'content.slideshow': ContentSlideshow;
      'content.image': ContentImage;
      'content.heading': ContentHeading;
    }
  }
}
