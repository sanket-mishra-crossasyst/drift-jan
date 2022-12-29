import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values=[
    {
      'image':'/assets/Image/ellen-manning.jpg',
      'name':'Domnic Harris',
      'discription':'Fusce a libero pellentesque',
      'details':'Maecenas sem arcu, scelerisque in odio vel, porttitor dignissim purus. Sed vehicula commodo porta.',
      'date' : '20Aug'
    },
    {
      'image':'/assets/Image/mathew.jpg',
      'name':'Garry Sobars',
      'discription':'Nullam id ex at augue pharetra vestibulum eget id mauris.',
      'details':'Cras bibendum tortor tortor, eu luctus risus gravida ut. Suspendisse nisi tortor',
      'date' : '18Aug'
    },
    {
      'image':'/assets/Image/mathew.jpg',
      'name':'Stella Brown',
      'discription':'Vivamus venenatis tempus ipsum, id finibus libero aliquet convallis.',
      'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem diam, pulvinar id nisl non',
      'date' : '18Aug'
    },
    {
      'image':'/assets/Image/mathew.jpg',
      'name':'Steve Jonson',
      'discription':'Donec ut ante tristique, gravida justo vitae',
      'details':'dictum at ligula vitae, posuere sagittis augue. Nam vitae eros quis felis consectetur egestas vitae vitae massa.',
      'date' : '15Aug'
    },
    {
      'image':'/assets/Image/mathew.jpg',
      'name':'Alex Dolgove',
      'discription':'Ut tincidunt massa non elementum fermentum..',
      'details':'Nullam vel ipsum eget odio viverra pellentesque. Nulla auctor eu felis eget vulputate.',
      'date' : '15Aug'
    },
    {
      'image':'/assets/Image/nikki.jpg',
      'name':'Domnic Brown',
      'discription':'Fusce eu rutrum orci. Aliquam hendrerit metus sit amet interdum',
      'details':'Phasellus ligula purus, eleifend vel massa ut, interdum pulvinar sapien. Nullam a ex nec elit condimentum mattis.',
      'date' : '18Aug'
    },
    {
      'image':'/assets/Image/amay.jpg',
      'name':'Brian Lara',
      'discription':'Brian Lara',
      'details':'Aenean facilisis, lorem eget interdum tristique, velit odio tempus orci, sed molestie felis ipsum dignissim leo. ',
      'date' : '2Aug'
    }
  ]
image="/assets/Image/ellen-manning.jpg";
image1="/assets/Image/mathew.jpg";
image2="/assets/Image/nikki.jpg";
image3="/assets/Image/amay.jpg";

dropdowns=[
  {'value':'All'},
  {'value':'None'},
  {'value':'Read'},
  {'value':'Unread'},
  {'value':'Starred'},
  {'value':'Unstarred'}
]
}
