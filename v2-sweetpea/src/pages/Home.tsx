import { MDBBtn, MDBContainer, MDBRow,
        MDBCol, MDBRipple, MDBIcon,
        MDBCard, MDBCardBody, MDBCardTitle,
        MDBCardText, MDBCardImage, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export function Home() {
    return (
    <>
        <main className='my-5'>
        <MDBContainer>
    <MDBRow className='mb-5'>
        <MDBCol md='5' className='col-example'>
        <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        rippleTag='div'
        rippleColor='light'
        >
        <img src='assets/images/marjolaine.jpg' className='w-100' />
    <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
    </a>
    </MDBRipple>
        </MDBCol>

        <MDBCol md='7' className='col-example'>
        <h1 className='mb-3'>Your Delightful of Happiness</h1>
        <p>Explore our wide variety of cakes and pastries that will delight the sweetness in you.</p>
            <hr className='my-3' />
            <p>We make every occasion sweeter, every milestone more memorable,
            and every celebration more spectacular with the most amazing and
            delectable cakes and pastries.</p>
            <MDBBtn className='me-2'>Explore</MDBBtn>
            <MDBBtn outline>
            {" "}
            <MDBIcon fas icon="shopping-cart" className='me-2' />Order Now
            </MDBBtn>
        </MDBCol>
    </MDBRow>

    <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'>
        </MDBCarouselItem>

        <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'>
        </MDBCarouselItem>

    <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.pexels.com/photos/1027811/pexels-photo-1027811.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='...'>
    </MDBCarouselItem>
    </MDBCarousel>

    <div>
        <h2 className='my-3'>Featured Products</h2>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
            <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
        <MDBCardTitle>Royal Vanilla</MDBCardTitle>
            <MDBCardText>
                Soft vanilla sponge cake infused with orange exract. Covered with delectable
                merengue icing, and chocolate shavings. Topped with tropical citrus fruits.
            </MDBCardText>
        </MDBCardBody>
    </MDBCard>
</MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Carrot Cake</MDBCardTitle>
            <MDBCardText>
            A sweet and moist spice cake, full of cut carrots and toasted nuts,
            and covered in cream cheese icing. One part of the cake is that the
            orange flakes of cut carrot give the cake color and texture, along
            with sweetness and moisture.
            </MDBCardText>
        </MDBCardBody>
    </MDBCard>
</MDBCol>

        <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Black Forest</MDBCardTitle>
            <MDBCardText>
            An authentic German cake made up of a chocolate layer cake
            with cherries in the middle and whipped cream on top.
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Strawberry Cheesecake</MDBCardTitle>
                <MDBCardText>
                This baked strawberry cheesecake has a light & creamy base
                topped with the best strawberry topping made of fresh strawberries
                and lemon juice!
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Blueberry Cake</MDBCardTitle>
                <MDBCardText>
                This super moist blueberry cake has a strong natural blueberry flavor from fresh blueberries.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/4553118/pexels-photo-4553118.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Mille-Feuille</MDBCardTitle>
                <MDBCardText>
                Traditional mille-feuille is made with three flaky layers
                of puff pastry and two layers of pastry cream.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
</MDBRow>
</div>
</MDBContainer>
    </main>
    </>
    )
}