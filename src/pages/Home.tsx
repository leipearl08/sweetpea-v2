import { MDBContainer, MDBRow, MDBCol, MDBCard,
        MDBCardBody, MDBCardTitle, MDBCardText,
        MDBCardImage, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export function Home() {
    const handleClkScroll = () => {
        const element = document.getElementById('crlSection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

    return (
    <>
        <main className='my-5'>
        <MDBContainer>
    <MDBRow className='mb-5'>
        <MDBCol md='5' className='col-example'>
        <div className="ratio ratio-16x9">
        <iframe
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/A039Hsw/completing-the-decorated-cake_41txjbvl__bb66b13237ebd365f5488117fb366575__P360.mp4"
            title="Cake video"
            allowFullScreen>
        </iframe>
        </div>
        </MDBCol>

        <MDBCol md='7' className='col-example'>
        <h1 className='mb-3'>Your Delightful of Happiness</h1>
        <p>Explore our wide variety of cakes and pastries that will delight the sweetness in you.</p>
            <hr className='my-3' />
            <p>We make every occasion sweeter, every milestone more memorable,
            and every celebration more spectacular with the most amazing and
            delectable cakes and pastries.</p>
            <Button variant='primary' className='me-2 btn-scroll' onClick={handleClkScroll}>Explore</Button>
            <a href="/store">
            <Button variant='outline-primary'>Order Now</Button>
            </a>
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

    <div id='crlSection' className='mb-5'>
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

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='assets/images/tarte-tatin.jpg'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Tarte Tatin</MDBCardTitle>
                <MDBCardText>
                An upside-down apple tart that is buttery, slightly salty pastry
                dough spotlights apples cooked to a rich, deep amber. It's modest in its simplicity.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='https://images.pexels.com/photos/960540/pexels-photo-960540.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Triple Chocolate Mousse</MDBCardTitle>
                <MDBCardText>
                an amazing combination of chocolate cake, chocolate fudge,
                and chocolate and white chocolate mousse! Smooth and creamy
                layers of mousse on top of a rich, moist cake.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol>
        <MDBCard className='h-100'>
            <MDBCardImage
            src='assets/images/vanilla-opera.jpg'
            alt='...'
            position='top'
            height="200px"
            />
        <MDBCardBody>
            <MDBCardTitle>Classic Opera Cake</MDBCardTitle>
                <MDBCardText>
                This classic French Opera Cake is made with layers of almond sponge,
                potent coffee syrup, French buttercream, and chocolate ganache. It's worthy of any special occasion.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
</MDBRow>
</div>
<hr />
<div id='contSection'>
    <MDBRow>
        <MDBCol md='7' className='col-example'>
        <h1 className='mb-3'>Contact Us</h1>
        <h2>SweetPea Group Inc.</h2>
            <p>201 A. Charleston Blvd.
            <br />Brooklyn, NY 11211
            <br />phone: (212) 509-6995
            <br />email: shop@sweetpea.com</p>
        </MDBCol>
    </MDBRow>
</div>
</MDBContainer>
    </main>
    </>
    )
}