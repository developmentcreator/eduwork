import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import CustomFormSelect from '../CustomFormSelect/index';
import { createAddress } from '../../app/api/address';
import { useHistory } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required('Nama alamat harus diisi'),
    detail: yup.string().required('Detail alamat harus diisi'),
    provinsi: yup.string().required('Provinsi belum dipilih'), nullable(),
    kabupaten: yup.string().required('Kabupaten belum dipilih'), nullable(),
    kecamatan: yup.string().required('Kecamatan belum dipilih'), nullable(),
    keluarahan: yup.string().required('Kelurahan belum dipilih'), nullable(),
}).required();

export default function AddAddress() {
    const { register, formState: { errors }, handleSubmit, watch, setValue, getValues } = useForm({
        resolver: yupResolver(schema)
    });
    const [status, setStatus] = useState('idle');
    const hitory = useHistory();
    const updateValues = (field, value) => setValue(field, value, { shouldValidate: true, shouldDirty: true });
    const alfields = watch();

    const onSubmit = async formData => {
        const payload = {
            name: formData.name,
            detail: formData.detail,
            provinsi: formData.provinsi,
            kabupaten: formData.kabupaten,
            kecamatan: formData.kecamatan,
            kelurahan: formData.kelurahan,
        };
        setStatus('loading');
        try {
            const response = await createAddress(payload);
            if (response.status === 200) {
                setStatus('success');
                hitory.push('/address');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    useEffect(() => {
        register({ name: 'provinsi' });
        register({ name: 'kabupaten' });
        register({ name: 'kecamatan' });
        register({ name: 'kelurahan' });
    }
        , [register]);
    
    useEffect(() => {
        if (alfields.provinsi) {
            updateValues('kabupaten', null);
            updateValues('kecamatan', null);
            updateValues('kelurahan', null);
        }
    }, [alfields.provinsi]);

    useEffect(() => {
        if (alfields.kabupaten) {
            updateValues('kecamatan', null);
            updateValues('kelurahan', null);
        }
    }
        , [alfields.kabupaten]);
    
    useEffect(() => {
        if (alfields.kecamatan) {
            updateValues('kelurahan', null);
        }
    }
        , [alfields.kecamatan]);
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Nama Alamat</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" name="name" ref={register} />
                    {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Detail Alamat</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" name="detail" ref={register} />
                    {errors.detail && <Form.Text className="text-danger">{errors.detail.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>   
                <Form.Label column sm={2}>Provinsi</Form.Label>
                <Col sm={10}>
                    <CustomFormSelect name="provinsi" ref={register} />
                    {errors.provinsi && <Form.Text className="text-danger">{errors.provinsi.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Kabupaten</Form.Label>
                <Col sm={10}>
                    <CustomFormSelect name="kabupaten" ref={register} />
                    {errors.kabupaten && <Form.Text className="text-danger">{errors.kabupaten.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Kecamatan</Form.Label>
                <Col sm={10}>
                    <CustomFormSelect name="kecamatan" ref={register} />
                    {errors.kecamatan && <Form.Text className="text-danger">{errors.kecamatan.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Kelurahan</Form.Label>
                <Col sm={10}>
                    <CustomFormSelect name="kelurahan" ref={register} />
                    {errors.kelurahan && <Form.Text className="text-danger">{errors.kelurahan.message}</Form.Text>}
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={status === 'loading'}>    
                {status === 'loading' ? 'Loading...' : 'Submit'}
            </Button>
        </Form>
    );
}


